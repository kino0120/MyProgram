using namespace std;
int V;//number of vertices
int d[MAX_V];
bool used[MAX_V];
struct edge{int to,cost;};
vector<edge> graph[MAX_V];
void dijkstra(int,s){
    memset(used,false,sizeof(used));
    d[s]=0;
    for(int i=0;i<V;i++){
        int id;
        for(int j=0;j<V;j++)if(!used[j]&&d[id]>d[j])id=j;
        used[id]=true;
        for(int j=0;j<graph[id].size();j++){
            edge e = graph[id][j];
            d[e.to]=min(d[e.to],d[id]+e.cost);
        }
    }
    return;
}
