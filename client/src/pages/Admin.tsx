import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RefreshCw, Users, Mail } from "lucide-react";
import { format } from "date-fns";

interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
}

interface SubscribersResponse {
  subscribers: NewsletterSubscriber[];
  count: number;
}

export default function Admin() {
  const { data, isLoading, error, refetch, isRefetching } = useQuery<SubscribersResponse>({
    queryKey: ["/api/newsletter/subscribers"],
    queryFn: async () => {
      const res = await fetch("/api/newsletter/subscribers", {
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }
      return res.json();
    },
    refetchInterval: 5000, // 每 5 秒自动刷新
    refetchOnWindowFocus: true,
  });

  const handleRefresh = () => {
    refetch();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                订阅者管理
              </h1>
              <p className="text-muted-foreground">
                实时查看所有邮件订阅者列表
              </p>
            </div>
            <Button
              onClick={handleRefresh}
              disabled={isRefetching}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isRefetching ? "animate-spin" : ""}`} />
              刷新
            </Button>
          </div>

          <div className="grid gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  订阅统计
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-3xl font-bold text-foreground">
                      {data?.count ?? 0}
                    </div>
                    <div className="text-sm text-muted-foreground">总订阅者</div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className={`h-2 w-2 rounded-full ${isRefetching ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
                    <span className="text-xs">
                      {isRefetching ? "更新中..." : "实时同步"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  订阅者列表
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8 text-muted-foreground">
                    加载中...
                  </div>
                ) : error ? (
                  <div className="text-center py-8">
                    <div className="text-destructive mb-2">
                      加载失败，请稍后重试
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {error instanceof Error ? error.message : "未知错误"}
                    </div>
                    <Button
                      onClick={handleRefresh}
                      variant="outline"
                      size="sm"
                      className="mt-4"
                    >
                      重试
                    </Button>
                  </div>
                ) : !data || data.subscribers.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    暂无订阅者
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">#</TableHead>
                          <TableHead>邮箱地址</TableHead>
                          <TableHead>订阅时间</TableHead>
                          <TableHead>订阅日期</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.subscribers.map((subscriber, index) => (
                          <TableRow key={subscriber.id}>
                            <TableCell className="font-medium">
                              {index + 1}
                            </TableCell>
                            <TableCell className="font-mono text-sm">
                              {subscriber.email}
                            </TableCell>
                            <TableCell>
                              {format(new Date(subscriber.subscribedAt), "yyyy-MM-dd HH:mm:ss")}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {format(new Date(subscriber.subscribedAt), "yyyy年MM月dd日")}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            <p>页面每 5 秒自动刷新，或点击刷新按钮手动更新</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

