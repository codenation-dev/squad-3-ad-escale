# Generated by Django 2.2.3 on 2019-08-16 03:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Puppy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('age', models.IntegerField()),
                ('breed', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=500)),
                ('size', models.CharField(blank=True, choices=[('SM', 'Small'), ('MD', 'Medium'), ('LG', 'Large')], max_length=2)),
                ('sex', models.CharField(blank=True, choices=[('FE', 'Female'), ('MA', 'Male')], max_length=2)),
                ('status', models.CharField(blank=True, choices=[('LS', 'Lost'), ('FA', 'For adoption')], max_length=2)),
                ('animal_type', models.CharField(blank=True, choices=[('DG', 'Dog'), ('CT', 'Cat'), ('OT', 'Other')], max_length=2)),
                ('image', models.ImageField(blank=True, upload_to='img/pets/')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]