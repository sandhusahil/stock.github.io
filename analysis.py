# import pandas as pd
# from pandas_profiling import ProfileReport

# df = pd.read_csv('dairy_dataset.csv')

# print(df)

# profile = ProfileReport(df)
# profile.to_file(output_file="housing.html")

import pandas as pd
import pandas_profiling
# Load your dataset into a Pandas DataFrame
# Replace 'your_dataset.csv' with your dataset file path or URL
data = pd.read_csv('dairy_dataset.csv')

# Create a profile report
profile = ProfileReport(data, title='Pandas Profiling Report', explorative=True)

# Generate the report to a file (HTML format)
# Change the file name as needed
profile.to_file('report.html')


