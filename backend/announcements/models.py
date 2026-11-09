
import uuid

from django.conf import settings
from django.core.exceptions import ValidationError
from django.db import models


class Announcement(models.Model):
    class AnnouncementType(models.TextChoices):
        URGENT = "urgent", "Ważny komunikat"
        INFO = "info", "Informacja"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    title = models.CharField(max_length=255)
    message = models.TextField()

    type = models.CharField(
        max_length=10,
        choices=AnnouncementType.choices,
        default=AnnouncementType.INFO,
    )

    published_at = models.DateTimeField()

    expires_at = models.DateTimeField(
        null=True,
        blank=True,
    )

    is_active = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="announcements",
    )

    class Meta:
        ordering = ["-published_at"]

    def __str__(self):
        return self.title

    def clean(self):
        super().clean()

        if (
            self.expires_at is not None
            and self.published_at is not None
            and self.expires_at <= self.published_at
        ):
            raise ValidationError({
                "expires_at": (
                    "Data wygaśnięcia musi być późniejsza "
                    "niż data publikacji."
                )
            })
