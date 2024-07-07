#include <cstdio>
#include <string>
#include <iostream>
using namespace std;

void print(string str)
{
	cout << str;
}

void println(string str)
{
	print(str + "\n");
}

string input_url()
{
	print("Enter URL: ");
	string url;
	cin >> url;

	auto index = url.find("&list=");
	if (index != string::npos) {
		url = url.substr(0, index);
	}

	return url;
}

int main(int argc, char* argv)
{
	string url = input_url();
	string cmd = "yt-dlp -f m4a \"" + url + "\"";

	system(cmd.c_str());

	return 0;
}
