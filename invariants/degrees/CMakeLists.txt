cmake_minimum_required(VERSION 3.20)
project(invariants-cpp)

set(CMAKE_CXX_STANDARD 14)

add_executable(degrees degrees.cpp
        graph6io.cpp graph6io.h graph_config.h)

set(CMAKE_CXX_FLAGS_RELEASE "-O3")
