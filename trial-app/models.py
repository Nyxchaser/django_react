from django.db import models

# Create your models here.
class Book(models.Model):
	STATUSES = (
		(0, 'Unread'),
		(1, 'Reading'),
		(2, 'Read'),
		(-1, 'Unknown')
	)
	title = models.CharField(blank=False, unique=True, max_length=100)
	status = models.IntegerField(choices=STATUSES, default=-1)
	description = models.TextField(max_length=500, blank=True)