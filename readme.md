# STREAMS

- instances of eventEmitter class
- used to process data piece by piece without completing the whole read or write operation and therefore without keeping track all data in memory.
- perfect for handling large volumes of data for example videos.
- more efficient data processing in terms of memory and time.

## Types of Streams.

- ReadableStream
- WritableStream
- DuplexStream
- TransformStream

### ReadableStream

- Streams from which we can read data from.
- Examples: http request and fs read statements.

```ReadableStream events : data,
end.
ReadableStream functions :pipe(),
read()
```

### WritableStream

- Streams from which we can write data.
- Examples: http response and fs write statements.

```WritableStream events : drain,
finish.
WritableStream functions :write(),
end()
```

### DuplexSteam

- Streams that are both writable and readable.
- Example:net web socket.

### TransformStream

- Duplex Streams that transform data as it is written or read.
- Example:zlib Gzip creation.

# Requiring a modules

- steps :
- Resolving and loading
- wrapping
- execution
- returning reports
- caching

## Types of modules

- core modules
- developer modules
- third party modules

### wrapping

- example:
  ` functions exports,request,modules,__filename,__dirname`

```
- require  : function to modules.
- modules : reference to the  current modules
- exports : export   obect from module
__filename :absolute path of the current module's file
__dirname : directory name of the current module

```

### Returning Exports

- require function returns exports of the required module
- module.exports is th returned object
- module.exports is used to export one single variable
- export is used to exportmultiple named variables.
