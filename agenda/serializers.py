from rest_framework import serializers
from .models import Cliente, Empleado, Servicio, Cita


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('__all__')
        read_only_fields = ['fecha_registro']
    
class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = ('__all__')
        read_only_fields = ['fecha_registro']

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio
        fields = ('__all__')


class CitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cita
        fields = ('__all__')
        read_only_fields = ['fecha_registro']











