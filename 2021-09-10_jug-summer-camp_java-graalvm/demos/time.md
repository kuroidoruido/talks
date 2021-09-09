# Notes

- réalisé sur un Intel Core i7-8700K CPU à 3.70GHz couplé à 24Go de RAM DDR4 à 3200MHz (3*8Go dont 16Go en dual channel)
- jdk installés via sdkman
- les mesures des tailles des jar et exécutable ont été faites avec ls et du sous ArchLinux
- les mesures de temps/memory/CPU ont été faites avec GNU time 1.9

# Compilation

## OpenJDK 11.0.12

### Quarkus

> ~/App/time-1.9/time --format="time: %E\tmax memory: %M\tCPU: %P" mvn package

- time: 0:04.16	max memory: 728904	CPU: 422%
- time: 0:04.05	max memory: 726072	CPU: 418%
- time: 0:03.96	max memory: 764232	CPU: 421%

- jar size: 15492211 / 15M

### SpringBoot Java 8

> Commenter les éléments du pom lié à spring native puis :

> ~/App/time-1.9/time --format="time: %E\tmax memory: %M\tCPU: %P" mvn package

- time: 0:01.97	max memory: 310384	CPU: 363%
- time: 0:01.69	max memory: 297856	CPU: 363%
- time: 0:01.75	max memory: 314484	CPU: 350%

- jar size: 25752094 / 25M

### SpringBoot Java 11

> Commenter les éléments du pom lié à spring native puis :

> ~/App/time-1.9/time --format="time: %E\tmax memory: %M\tCPU: %P" mvn package

- time: 0:02.30	max memory: 318712	CPU: 352%
- time: 0:01.89	max memory: 306556	CPU: 363%
- time: 0:01.80	max memory: 308632	CPU: 345%

- jar size: 25706404 / 25M

## GraalVM (HotSpot)

### Quarkus

> ~/App/time-1.9/time --format="time: %E\tmax memory: %M\tCPU: %P" mvn package

- time: 0:04.88	max memory: 747404	CPU: 409%
- time: 0:03.99	max memory: 630036	CPU: 414%
- time: 0:03.96	max memory: 742872	CPU: 434%

- jar size: 15492209 / 15M

### SpringBoot Java 8

> Commenter les éléments du pom lié à spring native puis :

> ~/App/time-1.9/time --format="time: %E\tmax memory: %M\tCPU: %P" mvn package

- time: 0:01.67	max memory: 299156	CPU: 340%
- time: 0:01.56	max memory: 299124	CPU: 344%
- time: 0:01.72	max memory: 290508	CPU: 340%

- jar size: 25850601 / 25M

### SpringBoot Java 11

> Commenter les éléments du pom lié à spring native puis :

> ~/App/time-1.9/time --format="time: %E\tmax memory: %M\tCPU: %P" mvn package

- time: 0:02.45	max memory: 347416	CPU: 330%
- time: 0:01.65	max memory: 286816	CPU: 344%
- time: 0:01.55	max memory: 295496	CPU: 345%

- jar size: 25850676 / 25M

## GraalVM (Native)

### Quarkus

> ~/App/time-1.9/time --format="time: %E\tmax memory: %M\tCPU: %P" mvn package -Pnative

- time: 1:07.21	max memory: 7128056	CPU: 666%
- time: 0:52.99	max memory: 7251468	CPU: 804%
- time: 0:52.07	max memory: 7182084	CPU: 803%

- executable size: 47881560 / 46Mo

### SpringBoot Java 8

> ~/App/time-1.9/time --format="time: %E\tmax memory: %M\tCPU: %P" mvn package -DskipTests -Pnative

- time: 1:58.92	max memory: 8883072	CPU: 582%
- time: 1:36.49	max memory: 9105580	CPU: 696%
- time: 1:37.81	max memory: 8814048	CPU: 687%

- executable size: 106071016 / 102Mo

### SpringBoot Java 11

> ~/App/time-1.9/time --format="time: %E\tmax memory: %M\tCPU: %P" mvn package -DskipTests -Pnative

- time: 1:40.34	max memory: 9412452	CPU: 695%
- time: 1:51.37	max memory: 8243100	CPU: 604%
- time: 1:40.06	max memory: 9443824	CPU: 694%

- executable size: 106071016 / 102M

# Execution

## OpenJDK 11.0.12

### Quarkus

> ~/App/time-1.9/time --format="max memory: %M" java -jar target/quarkus-app/quarkus-run.jar

- time: -	max memory: 131176
- time: -	max memory: 130740
- time: -	max memory: 133140

### SpringBoot Java 8

> Commenter les éléments du pom lié à spring native puis :

> ~/App/time-1.9/time --format="max memory: %M" java -jar target/todolist-0.0.1-SNAPSHOT.jar

- time: 2.094s	max memory: 346840
- time: 2.136	max memory: 356704
- time: 2.137	max memory: 362688

### SpringBoot Java 11

> Commenter les éléments du pom lié à spring native puis :

> ~/App/time-1.9/time --format="max memory: %M" java -jar target/todolist-0.0.1-SNAPSHOT.jar

- time: 2.118	max memory: 350512
- time: 2.218	max memory: 341120
- time: 2.194	max memory: 352688

## GraalVM (HotSpot)

### Quarkus

> ~/App/time-1.9/time --format="max memory: %M" java -jar target/quarkus-app/quarkus-run.jar

- time: -	max memory: 398080
- time: -	max memory: 399100
- time: -	max memory: 396876

### SpringBoot Java 8

> Commenter les éléments du pom lié à spring native puis :

> ~/App/time-1.9/time --format="max memory: %M" java -jar target/todolist-0.0.1-SNAPSHOT.jar

- time: 2.085	max memory: 673316
- time: 2.017	max memory: 675540
- time: 2.033	max memory: 673948

### SpringBoot Java 11

> Commenter les éléments du pom lié à spring native puis :

> ~/App/time-1.9/time --format="max memory: %M" ./target/todolist-1.0.0-SNAPSHOT-runner

- time: 1.963	max memory: 672300
- time: 2.029	max memory: 673356
- time: 2.057	max memory: 677964

## GraalVM (Native)

### Quarkus

> ~/App/time-1.9/time --format="max memory: %M" mvn package -Pnative

- time: -	max memory: 38144
- time: -	max memory: 38044
- time: -	max memory: 38076

### SpringBoot Java 8

> ~/App/time-1.9/time --format="max memory: %M" ./target/todolist

- time: 0.086	max memory: 111228
- time: 0.082	max memory: 111188
- time: 0.083	max memory: 111540

### SpringBoot Java 11

> ~/App/time-1.9/time --format="max memory: %M" ./target/todolist

- time: 0.084	max memory: 111664
- time: 0.079	max memory: 111800
- time: 0.084	max memory: 111876
