from django.db import models
from django.utils import timezone


class Puppy(models.Model):

    name = models.CharField(max_length=255)
    age = models.IntegerField()
    breed = models.CharField(max_length=255)
    description = models.CharField(max_length=2000)

    MALE = "MA"
    FEMALE = "FE"
    PET_SEX = ((FEMALE, ("Female")), (MALE, ("Male")))
    SMALL = "SM"
    MEDIUM = "MD"
    LARGE = "LG"
    PET_SIZE = ((SMALL, ("Small")), (MEDIUM, ("Medium")), (LARGE, ("Large")))
    LOST = "LS"
    FOR_ADOPTION = "FA"
    FOUND = "FO"
    PET_STATUS = ((LOST, ("Lost")), (FOR_ADOPTION,
                                     ("For adoption")), (FOUND, ("Found")))
    DOG = "DG"
    CAT = "CT"
    OTHER = "OT"
    ANIMAL = ((DOG, ("Dog")), (CAT, ("Cat")), (OTHER, ("Other")))

    size = models.CharField(max_length=2, choices=PET_SIZE, blank=True)
    sex = models.CharField(max_length=2, choices=PET_SEX, blank=True)
    status = models.CharField(max_length=2, choices=PET_STATUS, blank=True)
    animal_type = models.CharField(max_length=2, choices=ANIMAL, blank=True)
    image = models.ImageField(upload_to="img/pets/", blank=True)

    created_at = models.DateTimeField(default=timezone.now)
    published_at = models.DateTimeField(blank=True, null=True)

    def get_sex(self):
        return dict(self.PET_SEX).get(self.sex)

    def get_size(self):
        return dict(self.PET_SIZE).get(self.size)

    def get_status(self):
        return dict(self.PET_STATUS).get(self.status)

    def get_animal(self):
        return dict(self.ANIMAL).get(self.animal_type)

    def publish(self):
        self.published_at = timezone.now()
        self.save()
