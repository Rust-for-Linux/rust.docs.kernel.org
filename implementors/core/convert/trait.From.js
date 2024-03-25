(function() {var implementors = {
"alloc":[["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A&gt; <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'static + <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>,</span>"],["impl&lt;A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"primitive\" href=\"core/primitive.str.html\">str</a>, A&gt;&gt; for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;[<a class=\"primitive\" href=\"core/primitive.u8.html\">u8</a>], A&gt;"],["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"alloc/collections/enum.TryReserveErrorKind.html\" title=\"enum alloc::collections::TryReserveErrorKind\">TryReserveErrorKind</a>&gt; for <a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>"],["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"alloc/alloc/struct.LayoutError.html\" title=\"struct alloc::alloc::LayoutError\">LayoutError</a>&gt; for <a class=\"enum\" href=\"alloc/collections/enum.TryReserveErrorKind.html\" title=\"enum alloc::collections::TryReserveErrorKind\">TryReserveErrorKind</a>"],["impl&lt;T, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">[T]</a>, A&gt;&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;"]],
"core":[],
"kernel":[["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"core/alloc/struct.AllocError.html\" title=\"struct core::alloc::AllocError\">AllocError</a>&gt; for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a>&gt; for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"core/str/error/struct.Utf8Error.html\" title=\"struct core::str::error::Utf8Error\">Utf8Error</a>&gt; for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>&gt; for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"core/alloc/layout/struct.LayoutError.html\" title=\"struct core::alloc::layout::LayoutError\">LayoutError</a>&gt; for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt; for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"core/convert/enum.Infallible.html\" title=\"enum core::convert::Infallible\">Infallible</a>&gt; for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"kernel/str/enum.CStrConvertError.html\" title=\"enum kernel::str::CStrConvertError\">CStrConvertError</a>&gt; for <a class=\"struct\" href=\"kernel/error/struct.Error.html\" title=\"struct kernel::error::Error\">Error</a>"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"kernel/sync/struct.UniqueArc.html\" title=\"struct kernel::sync::UniqueArc\">UniqueArc</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"kernel/sync/struct.Arc.html\" title=\"struct kernel::sync::Arc\">Arc</a>&lt;T&gt;"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"kernel/sync/struct.UniqueArc.html\" title=\"struct kernel::sync::UniqueArc\">UniqueArc</a>&lt;T&gt;&gt;&gt; for <a class=\"struct\" href=\"kernel/sync/struct.Arc.html\" title=\"struct kernel::sync::Arc\">Arc</a>&lt;T&gt;"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"kernel/sync/struct.ArcBorrow.html\" title=\"struct kernel::sync::ArcBorrow\">ArcBorrow</a>&lt;'_, T&gt;&gt; for <a class=\"struct\" href=\"kernel/sync/struct.Arc.html\" title=\"struct kernel::sync::Arc\">Arc</a>&lt;T&gt;"],["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"kernel/sync/struct.UniqueArc.html\" title=\"struct kernel::sync::UniqueArc\">UniqueArc</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"kernel/sync/struct.UniqueArc.html\" title=\"struct kernel::sync::UniqueArc\">UniqueArc</a>&lt;T&gt;&gt;"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"kernel/types/trait.AlwaysRefCounted.html\" title=\"trait kernel::types::AlwaysRefCounted\">AlwaysRefCounted</a>&gt; <a class=\"trait\" href=\"core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"core/primitive.reference.html\">&amp;</a>T&gt; for <a class=\"struct\" href=\"kernel/types/struct.ARef.html\" title=\"struct kernel::types::ARef\">ARef</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()