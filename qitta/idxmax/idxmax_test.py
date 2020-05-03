import pandas as pd
import numpy as np

data = np.random.randint(1,10)
print(data)


def idxmax(self, axis=0, skipna=True):
    """
    Return index of first occurrence of maximum over requested axis.
    NA/null values are excluded.

    Parameters
    ----------
    axis : {0 or 'index', 1 or 'columns'}, default 0
        0 or 'index' for row-wise, 1 or 'columns' for column-wise
    skipna : boolean, default True
        Exclude NA/null values. If an entire row/column is NA, the result
        will be NA.

    Returns
    -------
    idxmax : Series

    Raises
    ------
    ValueError
        * If the row/column is empty

    See Also
    --------
    Series.idxmax

    Notes
    -----
    This method is the DataFrame version of ``ndarray.argmax``.
    """
    axis = self._get_axis_number(axis)
    indices = nanops.nanargmax(self.values, axis=axis, skipna=skipna)
    index = self._get_axis(axis)
    result = [index[i] if i >= 0 else np.nan for i in indices]
    return Series(result, index=self._get_agg_axis(axis))