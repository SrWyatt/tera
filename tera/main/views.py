from django.shortcuts import render
import csv
import os
from django.conf import settings

def index(request):
    return render(request, 'main/index.html')

def seguimiento(request):
    result = None
    error = None
    
    if request.method == 'POST':
        serial = request.POST.get('serial')
        csv_path = os.path.join(settings.BASE_DIR, 'main', 'seguimiento.csv')
        
        with open(csv_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row['serial'] == serial:
                    result = {
                        'fechaRecibido': row['fechaRecibido'],
                        'EstimadoEntrega': row['EstimadoEntrega'],
                        'Estado': row['Estado'],
                        'Descripción': row['Descripción'],
                    }
                    break
            if not result:
                error = "⚠️ Este código es erróneo o dejó de estar activo."

    return render(request, 'main/seguimiento.html', {'result': result, 'error': error})
