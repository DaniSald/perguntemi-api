#include <node.h>
#include <time.h>

using namespace v8;

void Rng(const FunctionCallbackInfo<Value> &args)
{
    Isolate *isolate = args.GetIsolate();

    if (args.Length() < 1)
    {
        isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Missing arguments", NewStringType::kNormal).ToLocalChecked()));

        return;
    }

    if (!args[0]->IsNumber())
    {
        isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Wrong argument type", NewStringType::kNormal).ToLocalChecked()));

        return;
    }

    unsigned int result = time(NULL);
    unsigned int limit = args[0].As<Number>()->Value();

    result ^= result << 13;
    result ^= result >> 17;
    result ^= result << 5;

    result = (result % limit) + 1;

    auto num = Number::New(isolate, result);

    args.GetReturnValue().Set(num);
}

void Init(Local<Object> exports)
{
    NODE_SET_METHOD(exports, "rng", Rng);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Init)
