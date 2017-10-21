initSidebarItems({"enum":[["Diff","A type returned by the `diff_with` function."],["Either","`Either` represents an alternative holding one value out of either of the two possible values."],["EitherOrBoth","A value yielded by `ZipLongest`. Contains one or two values, depending on which of the input iterators are exhausted."],["FoldWhile","An enum used for controlling the execution of `.fold_while()`."],["MinMaxResult","`MinMaxResult` is an enum returned by `minmax`. See `Itertools::minmax()` for more detail."],["Position","A value yielded by `WithPosition`. Indicates the position of this element in the iterator results."]],"fn":[["all","Test whether the predicate holds for all elements in the iterable."],["any","Test whether the predicate holds for any elements in the iterable."],["assert_equal","Assert that two iterables produce equal sequences, with the same semantics as equal(a, b)."],["chain","Create an iterator that first iterates `i` and then `j`."],["cloned","Create an iterator that clones each element from &T to T"],["concat","Combine all an iterator's elements into one element by using `Extend`."],["cons_tuples","Create an iterator that maps for example iterators of `((A, B), C)` to `(A, B, C)`."],["diff_with","Compares every element yielded by both `i` and `j` with the given function in lock-step and returns a `Diff` which describes how `j` differs from `i`."],["enumerate","Iterate `iterable` with a running index."],["equal","Return `true` if both iterables produce equal sequences (elements pairwise equal and sequences of the same length), `false` otherwise."],["fold","Perform a fold operation over the iterable."],["interleave","Create an iterator that interleaves elements in `i` and `j`."],["iterate","Creates a new iterator that infinitely applies function to value and yields results."],["join","Combine all iterator elements into one String, seperated by `sep`."],["kmerge","Create an iterator that merges elements of the contained iterators using the ordering function."],["kmerge_by","Create an iterator that merges elements of the contained iterators."],["max","Return the maximum value of the iterable."],["merge","Create an iterator that merges elements in `i` and `j`."],["min","Return the minimum value of the iterable."],["multipeek","An iterator adaptor that allows the user to peek at multiple `.next()` values without advancing the base iterator."],["multizip","An iterator that generalizes .zip() and allows running multiple iterators in lockstep."],["partition","Partition a sequence using predicate `pred` so that elements that map to `true` are placed before elements which map to `false`."],["process_results","“Lift” a function of the values of an iterator so that it can process an iterator of `Result` values instead."],["put_back","Create an iterator where you can put back a single item"],["put_back_n","Create an iterator where you can put back multiple values to the front of the iteration."],["rciter","Return an iterator inside a `Rc<RefCell<_>>` wrapper."],["repeat_call","An iterator source that produces elements indefinitely by calling a given closure."],["repeat_n","Create an iterator that produces `n` repetitions of `element`."],["rev","Iterate `iterable` in reverse."],["sorted","Collect all the iterable's elements into a sorted vector in ascending order."],["unfold","Creates a new unfold source with the specified closure as the \"iterator function\" and an initial state to eventually pass to the closure"],["zip","Iterate `i` and `j` in lock step."],["zip_eq","Iterate `i` and `j` in lock step."]],"macro":[["iproduct","Create an iterator over the “cartesian product” of iterators."],["izip","Create an iterator running multiple iterators in lockstep."]],"mod":[["structs","The concrete iterator types."]],"trait":[["Itertools","The trait `Itertools`: extra iterator adaptors and methods for iterators."],["PeekingNext","An iterator that allows peeking at an element before deciding to accept it."]]});