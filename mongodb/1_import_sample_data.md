Assumed mongodb and tools already installed.

# Download sample data from https://docs.mongodb.com/getting-started/shell/import-data/

# Linux shell
$ wget https://raw.githubusercontent.com/mongodb/docs-assets/primer-dataset/primer-dataset.json

# Import sample data
$ mongoimport --db test --collection restaurants --drop --file ./primer-dataset.json
2017-09-08T00:36:53.498+0000	connected to: localhost
2017-09-08T00:36:53.499+0000	dropping: test.restaurants
2017-09-08T00:36:54.559+0000	imported 25359 documents