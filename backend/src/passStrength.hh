#include <iostream>
#include <napi.h>
#include <cstring>
#include <string>
#include <algorithm>
#include <vector>
#include <map>
#include <cmath>
#include <regex>

using namespace std;

namespace passStrengthCheck
{
    // add number function
    double passStrengthChk(string x, string yVoid);
    // int add(int x, int y);

    // add function wrapper
    Napi::Number addWrapped(const Napi::CallbackInfo &info);
    // Export API
    Napi::Object Init(Napi::Env env, Napi::Object exports);
    NODE_API_MODULE(addon, Init)
}