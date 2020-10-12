from django.shortcuts import render
from django.views.generic import ListView


from .models import MenuItem




class MenuItemListView(ListView):
    model = MenuItem
