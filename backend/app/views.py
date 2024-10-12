from django.http import JsonResponse

def read_root(request):
    return JsonResponse({"message": "Hello World!"})

def register(request):
    return JsonResponse({"message": "Register"})

def login(request):
    return JsonResponse({"message": "Login"})

def read_item(request, item_id):
    q = request.GET.get('q', None)
    return JsonResponse({"item_id": item_id, "q": q})
