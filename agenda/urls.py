from rest_framework import routers
from .viewsets import ClienteViewSet, EmpleadoViewSet, ServicioViewSet, CitaViewSet

router = routers.DefaultRouter()
router.register('agenda/clientes', ClienteViewSet)
router.register('agenda/empleados', EmpleadoViewSet)
router.register('agenda/servicios', ServicioViewSet)
router.register('agenda/citas', CitaViewSet)

urlpatterns = router.urls
