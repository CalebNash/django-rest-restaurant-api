from django.db import models


class Order(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.CharField(max_length=255)



    def __str__(self):
        return self.name
