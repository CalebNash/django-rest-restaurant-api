from django.urls import path


from .views import MenuItemListAPIView, OrderListAPIView


urlpatterns = [
    path('', MenuItemListAPIView.as_view(), name='menu'),
    path('', OrderListAPIView.as_view(), name='order'),
]
