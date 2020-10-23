from rest_framework import serializers


from menu_items.models import MenuItem
from orders.models import Order




class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ('name', 'price', 'description',)


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('name', 'price', 'description',)
