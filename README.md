# BaaS (Backend as a Service) の動作確認

基本的には、非推奨。

supabaseは、エッジ関数の管理が難しいので、エッジ関数不要の、めちゃくちゃシンプルなシステムの時はいいかも。

実装例では、一応、エッジ関数も動作しているけど、偶然動いているような状態。

エッジ関数が必要な場合は、croudflare workersにしておいたほうがいい。

firebaseのNoSQLは、運用が難しくなりやすいので、負荷分散が限界になった時以外は利用しないほうがいい。

croudflare workersの実装例は、`astro-app-worker`参照。
