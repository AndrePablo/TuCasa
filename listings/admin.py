from django.contrib import admin
from .models import listings

class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'isPublished', 'price', 'listingDate', 'realtor')
    list_display_links = ('id', 'title')
    list_filter = ('realtor', )
    list_editable = ('isPublished', )
    search_fields = ('title', 'description', 'address', 'city', 'province', 'postalCode', 'price')
    list_per_page = 25

admin.site.register(listings, ListingAdmin)