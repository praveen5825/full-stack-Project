from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email=models.EmailField(unique=True)
    mobile_number=models.CharField(max_length=16,null=True,blank=True)
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username','mobile_number']

    def __str__(self):
        return f'{self.email}-{self.username}'
