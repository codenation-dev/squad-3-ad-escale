# Generated by Django 2.2.3 on 2019-08-17 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_farejando', '0002_auto_20190816_0017'),
    ]

    operations = [
        migrations.AlterField(
            model_name='puppy',
            name='status',
            field=models.CharField(blank=True, choices=[('LS', 'Lost'), ('FA', 'For adoption'), ('FO', 'Found')], max_length=2),
        ),
    ]