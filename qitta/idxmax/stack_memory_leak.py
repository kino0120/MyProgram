import pandas as pd
import numpy as np
from memory_profiler import profile

@profile
def stack():
    arr = np.random.randint(0,100,[10**7,10],dtype='int8')
    df = pd.DataFrame(arr, dtype='int8')
    #df_stack = df.stack()
    df_stack = np.ravel(df)
    del arr,df
    return df_stack

for i in range(10):
    df_stack = stack()
    del df_stack
