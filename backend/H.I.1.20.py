# 1.20 Gráfica de Progreso Acumulado del Proyecto
# Descripción:
# El sistema mostrará una gráfica que permita visualizar el progreso
# acumulado del proyecto en comparación con el plan inicial, indicando
# desviaciones y el avance general.

import plotly.graph_objects as go
import random
from dateutil.relativedelta import relativedelta
from datetime import datetime, timedelta

# Should this return fig?
def CumulativeProgress(tasks, startDate, endDate):
    DateCompletedTasks = []
    for task in tasks:
        if (task.IsCompleted() == True):
            DateCompletedTasks.append(task.GetCompletedDate())

    months = relativedelta(startDate, endDate).years * 12 + relativedelta(startDate, endDate).months
    fig = go.Figure(data=[go.Histogram(x= DateCompletedTasks,
                                       cumulative_enabled = True,
                                       xbins = dict(
                                           start = startDate,
                                           end = endDate,
                                           size = months),
                                       autobinx = False,
                                       histnorm = 'probability density')])
    fig.show()


class Task:
    def __init__(self, completed, completed_date=None):
        self.completed = completed
        self.completed_date = completed_date

    def IsCompleted(self):
        return self.completed

    def GetCompletedDate(self):
        return self.completed_date

# Función para generar una fecha aleatoria entre startDate y endDate
def random_date(start, end):
    delta = end - start
    random_days = random.randint(0, delta.days)
    return start + timedelta(days=random_days)

# Generar 50 tareas con fechas aleatorias entre startDate y endDate
startDate = datetime(2023, 5, 1)
endDate = datetime(2023, 10, 1)

tasks = []
for i in range(50):
    is_completed = random.choice([True, False])
    if is_completed:
        completed_date = random_date(startDate, endDate)
        tasks.append(Task(True, completed_date))
    else:
        tasks.append(Task(False))


CumulativeProgress(tasks, startDate, endDate)
        
    
    
