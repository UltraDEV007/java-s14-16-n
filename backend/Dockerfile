# Etapa de construcción
FROM maven:latest AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

# Etapa final
FROM openjdk:21
COPY --from=builder /app/target/FoodlyFinds-0.0.1-SNAPSHOT.jar app.jar
CMD ["java","-jar","app.jar"]