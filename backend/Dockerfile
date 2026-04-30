FROM alpine:latest AS builder
ARG PB_VERSION=0.37.4
RUN apk add --no-cache unzip ca-certificates wget

RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "x86_64" ]; then ARCH="amd64"; \
    elif [ "$ARCH" = "aarch64" ]; then ARCH="arm64"; \
    else ARCH="amd64"; fi && \
    wget -q https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_${ARCH}.zip \
    && unzip pocketbase_${PB_VERSION}_linux_${ARCH}.zip -d /tmp/pb_temp

FROM alpine:latest
RUN apk add --no-cache ca-certificates libc6-compat
WORKDIR /pb

# Copia o binário especificamente da pasta temporária
COPY --from=builder /tmp/pb_temp/pocketbase /pb/pocketbase

RUN chmod +x /pb/pocketbase
EXPOSE 8090

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=/pb/pb_data"]