import plotly.graph_objects as go

# Based on
# https://plotly.com/python/pie-charts/

def showCompletedTasksPercentage(tickets):
    labels = ['Completed Tasks', 'Incomplete Tasks']
    numCompletedTasks = 0
    for ticket in tickets:
        if ticket.getStatus() == True:
            numCompletedTasks += 1
    values =x [numCompletedTasks, len(tickets) - numCompletedTasks]
    fig = go.Figure(data=[go.Pie(labels=labels, values=values, hole=.8)])
    fig.update_traces(hoverinfo='label+value', textinfo='percent', textfont_size=12,
                  marker=dict(colors=['SpringGreen', 'Crimson'],
                              line=dict(color='#000000', width=2)))
    fig.update_layout(height = 290, width = 290, paper_bgcolor = 'SlateGray')
    fig.show()

# Testing the function:
class Ticket:
    def __init__(self):
        self.status = False

    def complete(self):
        self.status = True

    def getStatus(self):
        return self.status

tickets = []
for i in range(0, 5):
    tickets.append(Ticket())
    tickets[i].complete()
for i in range(5, 8):
    tickets.append(Ticket())
    
showCompletedTasksPercentage(tickets)
