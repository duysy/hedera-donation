# Generated by Django 4.2.17 on 2024-12-06 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("donation_app", "0006_delete_donationhistory"),
    ]

    operations = [
        migrations.AddField(
            model_name="campaign",
            name="approved_by_admin",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="campaign",
            name="status",
            field=models.CharField(
                choices=[("NEW", "New"), ("RUNNING", "Running"), ("CLOSED", "Closed")],
                default="NEW",
                max_length=20,
            ),
        ),
        migrations.AddField(
            model_name="donation",
            name="transaction_hash",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
