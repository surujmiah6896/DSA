JavaScript Array Methods Quick Reference
Array Methods That MUTATE Original Array
Method	Changes Original	Returns
push()	✅ Yes	New length
pop()	✅ Yes	Removed element
shift()	✅ Yes	Removed element
unshift()	✅ Yes	New length
splice()	✅ Yes	Removed elements
reverse()	✅ Yes	Reversed array
sort()	✅ Yes	Sorted array
fill()	✅ Yes	Modified array
copyWithin()	✅ Yes	Modified array
Array Methods That DO NOT Mutate Original Array
Method	Changes Original	Returns
map()	❌ No	New array
filter()	❌ No	New array
slice()	❌ No	New array
concat()	❌ No	New array
flat()	❌ No	New array
flatMap()	❌ No	New array
reduce()	❌ No	Single value
forEach()	❌ No	undefined
find()	❌ No	Element/undefined
some()	❌ No	Boolean
every()	❌ No	Boolean