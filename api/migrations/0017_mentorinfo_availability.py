# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-01-30 01:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_remove_mentorinfo_availability'),
    ]

    operations = [
        migrations.AddField(
            model_name='mentorinfo',
            name='availability',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]