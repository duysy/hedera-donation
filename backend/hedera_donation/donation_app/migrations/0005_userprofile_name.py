# Generated by Django 4.2.17 on 2024-12-05 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("donation_app", "0004_alter_hederauser_wallet_address"),
    ]

    operations = [
        migrations.AddField(
            model_name="userprofile",
            name="name",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
