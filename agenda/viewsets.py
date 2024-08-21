from rest_framework import viewsets, permissions
from .models import Cliente, Empleado, Servicio, Cita
from .serializers import ClienteSerializer, EmpleadoSerializer, ServicioSerializer, CitaSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [permissions.AllowAny]
    
class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
    permission_classes = [permissions.AllowAny]
    
class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer
    permission_classes = [permissions.AllowAny]

class CitaViewSet(viewsets.ModelViewSet):
    queryset = Cita.objects.all()
    serializer_class = CitaSerializer
    permission_classes = [permissions.AllowAny]







