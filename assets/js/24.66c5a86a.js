(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{176:function(e,t,r){"use strict";r.r(t);var n=r(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[r("a",{attrs:{href:"http://zh.wikipedia.org/zh-cn/%E7%BA%BF%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://zh.wikipedia.org/zh-cn/线程"),r("OutboundLink")],1),e._v("\n线程（英语：thread）是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。在 Unix System V 及 SunOS 中也被称为轻量进程（lightweight processes），但轻量进程更多指内核线程（kernel thread），而把用户线程（user thread）称为线程。")]),e._v(" "),r("p",[e._v("线程是独立调度和分派的基本单位。线程可以操作系统内核调度的内核线程，如 Win32 线程；由用户进程自行调度的用户线程，如 Linux 平台的 POSIX Thread；或者由内核与用户进程，如 Windows 7 的线程，进行混合调度。")]),e._v(" "),r("p",[e._v("同一进程中的多条线程将共享该进程中的全部系统资源，如虚拟地址空间，文件描述符和信号处理等等。但同一进程中的多个线程有各自的调用栈（call stack），自己的寄存器环境（register context），自己的线程本地存储（thread-local storage）。")]),e._v(" "),r("p",[e._v("一个进程可以有很多线程，每条线程并行执行不同的任务。")]),e._v(" "),r("p",[e._v("在多核或多 CPU，或支持 Hyper-threading 的 CPU 上使用多线程程序设计的好处是显而易见，即提高了程序的执行吞吐率。在单 CPU 单核的计算机上，使用多线程技术，也可以把进程中负责 IO 处理、人机交互而常备阻塞的部分与密集计算的部分分开来执行，编写专门的 workhorse 线程执行密集计算，从而提高了程序的执行效率。")]),e._v(" "),r("p",[e._v("ps:以上摘自 Wiki 多个平台全面解释什么是线程，加深理解。 ###空间开销\n线程的空间开销来自：")]),e._v(" "),r("p",[e._v("1）线程内核对象（Thread Kernel Object）。每个线程都会创建一个这样的对象，它主要包含线程上下文信息，在 32 位系统中，它所占用的内存在 700 字节左右。")]),e._v(" "),r("p",[e._v("2）线程环境块（Thread Environment Block）。TEB 包括线程的异常处理链，32 位系统中占用 4KB 内存。")]),e._v(" "),r("p",[e._v("3）用户模式栈（User Mode Stack），即线程栈。线程栈用于保存方法的参数、局部变量和返回值。每个线程栈占用 1024KB 的内存。要用完这些内存很简单，写一个不能结束的递归方法，让方法参数和返回值不停地消耗内存，很快就会发生 OutOfMemoryException。")]),e._v(" "),r("p",[e._v("4）内核模式栈（Kernel Mode Stack）。当调用操作系统的内核模式函数时，系统会将函数参数从用户模式栈复制到内核模式栈。在 32 位系统中，内核模式栈会占用 12KB 内存。")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("1）线程创建的时候，系统相继初始化以上这些内存空间。")]),e._v(" "),r("p",[e._v("2）接着 CLR 会调用所有加载 DLL 的 DLLMain 方法，并传递连接标志（线程终止的时候，也会调用 DLL 的 DLLMain 方法，并传递分离标志）。")]),e._v(" "),r("p",[e._v("3）线程上下文切换。一个系统中会加载很多的进程，而一个进程又包含若干个线程。但是一个 CPU 在任何时候都只能有一个线程在执行。为了让每个线程看上去都在运行，系统会不断地切换“线程上下文”：每个线程大概得到几十毫秒的执行时间片，然后就会切换到下一个线程了。这个过程大概又分为以下 5 个步骤：\n步骤 1: 进入内核模式。\n步骤 2: 将上下文信息（主要是一些 CPU 寄存器信息）保存到正在执行的线程内核对象上。\n步骤 3: 系统获取一个 Spinlock，并确定下一个要执行的线程，然后释放 Spinlock。如果下一个线程不在同一个进程内，则需要进行虚拟地址交换。\n步骤 4: 从将被执行的线程内核对象上载入上下文信息。\n步骤 5: 离开内核模式。")]),e._v(" "),r("hr"),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("总结了下，C# 下使用线程有一下几种方法，个人总结有可能不全或者有些错误，请大神指教。")]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("随着微软的 .NET 技术不断推荐，这些的线程用法也有些变化，如在 Winform 中和 WPF 中使用时可能有些区别。本文示例主要以 WPF 为准。\n在介绍每种用法前先交代一下公用函数，如果觉得代码代码被切割的看不懂了，可以下载工程代码：\n"),r("a",{attrs:{href:"https://github.com/AquariusCoder/WPF-Thread-Demon",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/AquariusCoder/WPF-Thread-Demon"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/AquariusCoder/WPF-Thread-Demon.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/AquariusCoder/WPF-Thread-Demon.git"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"http://download.csdn.net/detail/my___dream/8510525",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://download.csdn.net/detail/my___dream/8510525"),r("OutboundLink")],1),e._v("\n代码很简单，一看就懂的，给我个鄙视的眼神，就可以离开了->_->\nXAML")]),e._v(" "),e._m(5),r("p",[e._v("C# 代码")]),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),r("p",[e._v("Thread 执行完成之后变成 DeathThread 等待垃圾回收。所以如果你的程序会产生很多线程还是用线程池吧，不然你这么虐待她，当心她死给你看。")]),e._v(" "),e._m(9),e._v(" "),e._m(10),r("p",[e._v("线程池是为突然大量爆发的线程设计的，通过有限的几个固定线程为大量的操作服务，减少了创建和销毁线程所需的时间，从而提高效率。注意 QueueUserWorkItem 函数调用后只是进入排队队列，等待线程池有空闲线程时接管。\n所以，什么时候用 Thread 什么时候用 Threadpool 就很明了了。")]),e._v(" "),e._m(11),e._v(" "),e._m(12),r("p",[e._v("内部使用 Threadpool 实现，实现了 IComponentModel 接口，封装了进度报告等 UI 相关事件，方便 UI 相关编程。")]),e._v(" "),e._m(13),e._v(" "),e._m(14),r("p",[e._v("内部使用 Treadpool 实现。\nthread 是单核多线程，task 是多核多线程。也就是说在多核的情况下使用 Task 会有一些效率的提升，具体提升情况，看具体情况了。所以使用 Thread 还是 Task 看情况而定了。注意： Task 是 .NET 4.0 新特性。")]),e._v(" "),e._m(15),e._v(" "),e._m(16),r("p",[e._v("内部使用 Treadpool 实现。")]),e._v(" "),e._m(17),e._v(" "),r("p",[e._v("在 CLR(公共语言运行时)中只要有一个前台线程在运行，应用程序就是激活的，也就是说 main 函数要是提前完成了，但有一个或多个前台线程在运行，那么应用程序就是激活的。\nThread 创建的线程默认都是前台线程，可以通过 IsBackground 修改线程前后台属性。Threadpool 创建的线程都是后台线程，且不能改变。")]),e._v(" "),e._m(18),e._m(19),e._v(" "),r("p",[e._v("通过 TreadStat 属性可以读取线程状态。\n1）Thread.Start() 函数调用后线程处于 Unstarted 状态，只有当线程调度器分配给线程 CUP 时间后线程才进入 Runing 状态\n2）Thread.Sleep() 函数调用后会使线程进入 WaitSleepJoin 状态，等待函数定义的时间后线程自动被唤醒。\n3）Thread.Abort() 函数调用后会先线程发送终止请求，线程收到请求后引发 ThreadAbortException 线程捕获异常后进行清理工作(当然前提是你写了 try catch 语句)。\n4）Thread.Join() 函数能使当前线程阻塞以等待工作线程任务完成。")]),e._v(" "),e._m(20),e._v(" "),r("p",[e._v("1） 长时间执行繁重后台工作使用 Thread， 产生大量线程使用 Treadpool\n2） UI 后台处理，并且需要反馈和控制使用 BackgroundWorker\n3） Task 为 .NET 4.0 的新特性，注意版本问题，对于多核 CUP 有处理优势")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"c-线程总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-线程总结","aria-hidden":"true"}},[this._v("#")]),this._v(" C# 线程总结")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"什么是线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是线程")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"时间开销"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间开销","aria-hidden":"true"}},[this._v("#")]),this._v(" 时间开销")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"c-中使用线程的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-中使用线程的方法","aria-hidden":"true"}},[this._v("#")]),this._v(" C# 中使用线程的方法")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Thread")]),e._v(" "),r("li",[e._v("Threadpool")]),e._v(" "),r("li",[e._v("Backgroundworker")]),e._v(" "),r("li",[e._v("Task")]),e._v(" "),r("li",[e._v("Asynchronous Delegates")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('<Window x:Class="ThreadTest.MainWindow"\n  xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"\n  xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n  Title="MainWindow" Height="595.773" Width="887.65">\n  <Grid>\n  <Button x:Name="btThread" Content="Thread" HorizontalAlignment="Left" Margin="2,0,0,531" VerticalAlignment="Bottom" Width="75" Click="btThread_Click"/>\n  <ProgressBar x:Name="proThread" HorizontalAlignment="Left" Height="22" Margin="202,12,0,0" VerticalAlignment="Top" Width="668" TextOptions.TextFormattingMode="Display"/>\n  <Button x:Name="btThreadpool" Content="Threadpool" HorizontalAlignment="Left" Margin="0,43,0,0" VerticalAlignment="Top" Width="75" Click="btThreadpool_Click"/>\n  <ProgressBar x:Name="proThreadpool" HorizontalAlignment="Left" Height="22" Margin="202,43,0,0" VerticalAlignment="Top" Width="668"/>\n  <Button x:Name="btBgWorker" Content="BgWorker" HorizontalAlignment="Left" Margin="0,75,0,0" VerticalAlignment="Top" Width="75" Click="btBgWorker_Click"/>\n  <ProgressBar x:Name="proBgWorker" HorizontalAlignment="Left" Height="22" Margin="202,75,0,0" VerticalAlignment="Top" Width="668"/>\n  <Button x:Name="btDelegate" Content="Delegate" HorizontalAlignment="Left" Margin="0,106,0,0" VerticalAlignment="Top" Width="75" Click="btDelegate_Click"/>\n  <ProgressBar x:Name="proDelegate" HorizontalAlignment="Left" Height="22" Margin="202,106,0,0" VerticalAlignment="Top" Width="668"/>\n  <Button x:Name="btTask" Content="Task" HorizontalAlignment="Left" Margin="0,137,0,0" VerticalAlignment="Top" Width="75" Click="btTask_Click"/>\n  <ProgressBar x:Name="proTask" HorizontalAlignment="Left" Height="22" Margin="202,137,0,0" VerticalAlignment="Top" Width="668"/>\n  <Label x:Name="lbThread" Content="线程 Id:" HorizontalAlignment="Left" Margin="96,13,0,0" VerticalAlignment="Top" Width="101"/>\n  <Label x:Name="lbThreadpool" Content="线程 Id:" HorizontalAlignment="Left" Margin="96,44,0,0" VerticalAlignment="Top" Width="101"/>\n  <Label x:Name="lbBgWorker" Content="线程 Id:" HorizontalAlignment="Left" Margin="96,75,0,0" VerticalAlignment="Top" Width="101"/>\n  <Label x:Name="lbDelegate" Content="线程 Id:" HorizontalAlignment="Left" Margin="96,106,0,0" VerticalAlignment="Top" Width="101"/>\n  <Label x:Name="lbTask" Content="线程 Id:" HorizontalAlignment="Left" Margin="96,135,0,0" VerticalAlignment="Top" Width="101"/>\n  </Grid>\n</Window>\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('private void AsyncProgressBar(ProgressBar proBar)\n{\n// do some thing asynchrouse\nint val = 0;\nwhile (true)\n{\n    // 线程内不能直接访问 UI 对象，需要使用 Invoke 或者 BeginInvoke\n    object[] args = new object[2];\n    args[0] = proBar;\n    args[1] = val++;\n    Dispatcher.BeginInvoke(new GoProgressHandle(GoProgress), args);\n    if (val >= 100)\n    val = 0;\n    System.Threading.Thread.Sleep(100);\n}\n}\nprivate void GoProgress(ProgressBar proBar, int val)\n{\n    proBar.Value = val;\n}\nprivate void ShowThreadId(Label lb)\n{\n    object[] args = new object[2];\n    args[0] = lb;\n    args[1] = System.AppDomain.GetCurrentThreadId();\n    Dispatcher.BeginInvoke(new ShowThreadIdHandle(ShowThreadId_Invoke), args);\n}\nprivate void ShowThreadId_Invoke(Label lb, int id)\n{\n    lb.Content = string.Format("线程 Id：{0}", id);\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thread"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thread","aria-hidden":"true"}},[this._v("#")]),this._v(" Thread")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("private void ThreadPro(object obj)\n{\n    ShowThreadId(this.lbThread);\n    AsyncProgressBar((ProgressBar)obj);\n}\nSystem.Threading.Thread t = new System.Threading.Threa(new System.Threading.ParameterizedThreadStar(ThreadPro));\nt.Start(this.proThread);\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"threadpool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#threadpool","aria-hidden":"true"}},[this._v("#")]),this._v(" Threadpool")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("private void ThreadpoolPro(object state)\n{\n    ShowThreadId(this.lbThreadpool);\n    AsyncProgressBar(this.proThreadpool);\n}\nprivate void btThreadpool_Click(object sender,RoutedEventArgs e)\n{\n    // 排队任务，线程池有空线程时进入线程函数\n    System.Threading.ThreadPool.QueueUserWorkItem(new    System.Threading.WaitCallback(ThreadpoolPro));\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"backgroundworker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backgroundworker","aria-hidden":"true"}},[this._v("#")]),this._v(" Backgroundworker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("System.ComponentModel.BackgroundWorker bgWorker = newSystem.ComponentModel.BackgroundWorker();\npublic MainWindow()\n{\n    InitializeComponent();\n    this.bgWorker.DoWork += bgWorker_DoWork; // 不可以注册多次\n}\nprivate void bgWorker_DoWork(object sender,System.ComponentModel.DoWorkEventArgs e)\n{\n    ShowThreadId(this.lbBgWorker);\n        AsyncProgressBar(this.proBgWorker);\n}\nprivate void btBgWorker_Click(object sender,RoutedEventArgs e)\n{\n    if (this.bgWorker.IsBusy)\n        return;\n    this.bgWorker.RunWorkerAsync();\n    // bgWorker 可以在线程函数中直接调用 ReportProgress 当然要先注册事件响应函数\n    // this.bgWorker.ProgressChanged += bgWorker_ProgressChanged;\n    // bgWorker.ReportProgress\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"task"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#task","aria-hidden":"true"}},[this._v("#")]),this._v(" Task")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    private void ThreadpoolPro(object state)\n    {\n        ShowThreadId(this.lbThreadpool);\n        AsyncProgressBar(this.proThreadpool);\n    }\n\n    private void btTask_Click(object sender, RoutedEventArgs e)\n    {\n        Task tk = new Task(new Action(TaskPro));\n        tk.Start();\n    }\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"asynchronous-delegates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-delegates","aria-hidden":"true"}},[this._v("#")]),this._v(" Asynchronous Delegates")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    delegate void AsyncDelegate(ProgressBar proBar);\n\n    private void DelegatePro(ProgressBar proBar)\n    {\n        ShowThreadId(this.lbDelegate);\n        AsyncProgressBar(proBar);\n    }\n\n    private void btDelegate_Click(object sender, RoutedEventArgs e)\n    {\n        AsyncDelegate dele = new AsyncDelegate(DelegatePro);\n        dele.BeginInvoke(this.proDelegate, null, null);\n    }\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"前台线程-后台线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前台线程-后台线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 前台线程 & 后台线程")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-C# extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('    class program\n    {\n        public static void Main()\n        {\n            Thread t = new Thread(new ThreadStart(ThreadPro));\n            t.IsBackground = true; // 去掉这句，结果不一样\n\n            Console.WriteLine("Begin Thread...");\n            t.Start();\n            Console.WriteLine("End Thread...");\n        }\n\n        private static void ThreadPro()\n        {\n            Console.WriteLine("ThreadPro...");\n        }\n    }\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"线程状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程状态","aria-hidden":"true"}},[this._v("#")]),this._v(" 线程状态")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结论","aria-hidden":"true"}},[this._v("#")]),this._v(" 结论")])}],!1,null,null,null);t.default=a.exports}}]);