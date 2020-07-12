cmd_Release/obj.target/rng.node := g++ -o Release/obj.target/rng.node -shared -pthread -rdynamic -m64  -Wl,-soname=rng.node -Wl,--start-group Release/obj.target/rng/src/rng/rng.o -Wl,--end-group 
