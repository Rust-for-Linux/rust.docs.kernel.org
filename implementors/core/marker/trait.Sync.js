(function() {var implementors = {
"alloc":[["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>",1,["alloc::alloc::Global"]],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>",1,["alloc::boxed::Box"]],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>",1,["alloc::collections::TryReserveError"]],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"alloc/collections/enum.TryReserveErrorKind.html\" title=\"enum alloc::collections::TryReserveErrorKind\">TryReserveErrorKind</a>",1,["alloc::collections::TryReserveErrorKind"]],["impl&lt;'a, T, F, A&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/vec/struct.DrainFilter.html\" title=\"struct alloc::vec::DrainFilter\">DrainFilter</a>&lt;'a, T, F, A&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>",1,["alloc::vec::drain_filter::DrainFilter"]],["impl&lt;T, A&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>",1,["alloc::vec::Vec"]],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, A:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/vec/struct.Drain.html\" title=\"struct alloc::vec::Drain\">Drain</a>&lt;'_, T, A&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/vec/struct.IntoIter.html\" title=\"struct alloc::vec::IntoIter\">IntoIter</a>&lt;T, A&gt;"]],
"core":[],
"kernel":[["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>",1,["kernel::error::Error"]],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"kernel/str/enum.CStrConvertError.html\" title=\"enum kernel::str::CStrConvertError\">CStrConvertError</a>",1,["kernel::str::CStrConvertError"]],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/str/struct.CStr.html\" title=\"struct kernel::str::CStr\">CStr</a>",1,["kernel::str::CStr"]],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/str/struct.CString.html\" title=\"struct kernel::str::CString\">CString</a>",1,["kernel::str::CString"]],["impl&lt;'a, T&gt; !<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/struct.ArcBorrow.html\" title=\"struct kernel::sync::ArcBorrow\">ArcBorrow</a>&lt;'a, T&gt;",1,["kernel::sync::arc::ArcBorrow"]],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/struct.UniqueArc.html\" title=\"struct kernel::sync::UniqueArc\">UniqueArc</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>",1,["kernel::sync::arc::UniqueArc"]],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/lock/mutex/struct.MutexBackend.html\" title=\"struct kernel::sync::lock::mutex::MutexBackend\">MutexBackend</a>",1,["kernel::sync::lock::mutex::MutexBackend"]],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/lock/spinlock/struct.SpinLockBackend.html\" title=\"struct kernel::sync::lock::spinlock::SpinLockBackend\">SpinLockBackend</a>",1,["kernel::sync::lock::spinlock::SpinLockBackend"]],["impl&lt;T, F&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/types/struct.ScopeGuard.html\" title=\"struct kernel::types::ScopeGuard\">ScopeGuard</a>&lt;T, F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>",1,["kernel::types::ScopeGuard"]],["impl&lt;T&gt; !<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/types/struct.Opaque.html\" title=\"struct kernel::types::Opaque\">Opaque</a>&lt;T&gt;",1,["kernel::types::Opaque"]],["impl&lt;L, R&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"kernel/types/enum.Either.html\" title=\"enum kernel::types::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>",1,["kernel::types::Either"]],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/struct.Arc.html\" title=\"struct kernel::sync::Arc\">Arc</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/struct.CondVar.html\" title=\"struct kernel::sync::CondVar\">CondVar</a>"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>, B:&nbsp;<a class=\"trait\" href=\"kernel/sync/lock/trait.Backend.html\" title=\"trait kernel::sync::lock::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/lock/struct.Lock.html\" title=\"struct kernel::sync::lock::Lock\">Lock</a>&lt;T, B&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, B:&nbsp;<a class=\"trait\" href=\"kernel/sync/lock/trait.Backend.html\" title=\"trait kernel::sync::lock::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/lock/struct.Guard.html\" title=\"struct kernel::sync::lock::Guard\">Guard</a>&lt;'_, T, B&gt;"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>, U:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/struct.LockedBy.html\" title=\"struct kernel::sync::LockedBy\">LockedBy</a>&lt;T, U&gt;"],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/sync/struct.LockClassKey.html\" title=\"struct kernel::sync::LockClassKey\">LockClassKey</a>"],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/task/struct.Task.html\" title=\"struct kernel::task::Task\">Task</a>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"kernel/types/trait.AlwaysRefCounted.html\" title=\"trait kernel::types::AlwaysRefCounted\">AlwaysRefCounted</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/types/struct.ARef.html\" title=\"struct kernel::types::ARef\">ARef</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"kernel/struct.ThisModule.html\" title=\"struct kernel::ThisModule\">ThisModule</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()