from django.shortcuts import render, redirect, get_object_or_404
from .models import User
from .forms import UserForm

def user_list(request):
    users = User.objects.all()
    context = {
        'users': users,
    }
    return render(request, 'list.html', context)


def create_user(request):
    form = UserForm()
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('users-list')

    context = {
        'form': form,
    }
    return render(request, 'create.html', context)

def retrieve(request):

    context = {}
    context["dataset"] = User.objects.all()
    return render(request, 'retrieve.html', context)

