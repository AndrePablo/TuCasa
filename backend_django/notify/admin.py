from django.contrib import admin
from .models import MessagesModel

class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'subject')
    list_display_links = ('id', 'name')
    search_fields = ('name', 'email', 'subject')
    list_per_page = 25

admin.site.register(MessagesModel, ContactAdmin)