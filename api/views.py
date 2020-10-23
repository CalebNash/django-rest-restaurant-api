from django.shortcuts import render


from rest_framework import generics


from menu_items.models import MenuItem
from orders.models import Order
from .serializers import MenuItemSerializer, OrderSerializer



class MenuItemListAPIView(generics.ListAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

class OrderListAPIView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
