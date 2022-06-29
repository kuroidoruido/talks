

## Launch k6 scenario

```bash
./k6 run scenario1.js
```

## Launch k6 scenario with influx output

```bash
K6_INFLUXDB_USERNAME=admin K6_INFLUXDB_PASSWORD=adminadmin ./k6 run --out influxdb=http://localhost:8086/k6-graalvm-talk mix.js
```

## FAQ

### Deal with error "WARN[0121] Request Failed error="Get \"http://localhost:8080/api/v1/todo\": dial tcp 127.0.0.1:8080: socket: too many open files"

full documentation: https://k6.io/docs/misc/fine-tuning-os#network-resource-limit

```bash
ulimit -n 5000 # for linux
sudo launchctl limit maxfiles 65536 200000 # for macOS
```