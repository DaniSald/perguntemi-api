cmd_Release/rng.node := ln -f "Release/obj.target/rng.node" "Release/rng.node" 2>/dev/null || (rm -rf "Release/rng.node" && cp -af "Release/obj.target/rng.node" "Release/rng.node")
