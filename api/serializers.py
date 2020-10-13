from rest_framework import serializers


from menu_items.models import MenuItem




class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ('name', 'price', 'description',)
