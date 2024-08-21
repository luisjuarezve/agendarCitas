from django.db import models

# Create your models here.
class Cliente(models.Model):
    cedula = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    correo = models.EmailField()
    fecha_nac = models.DateField()
    fecha_registro = models.DateTimeField(auto_now_add=True)
    
class Servicio(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    precio = models.FloatField()
    
class Empleado(models.Model):
    cedula = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    correo = models.EmailField()
    fecha_nac = models.DateField()
    fecha_registro = models.DateTimeField(auto_now_add=True)
    
class Cita(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    empleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    fecha_cita = models.DateTimeField()
    fecha_registro = models.DateTimeField(auto_now_add=True)