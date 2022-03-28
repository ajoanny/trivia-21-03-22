node ./golden-master/tester.js > ./golden-master/out.txt
diff ./golden-master/expected/expected1.txt ./golden-master/out.txt

node ./golden-master/tester-2.js > ./golden-master/out.txt
diff ./golden-master/expected/expected2.txt ./golden-master/out.txt

node ./golden-master/tester-3.js > ./golden-master/out.txt
diff ./golden-master/expected/expected3.txt ./golden-master/out.txt

node ./golden-master/tester-4.js > ./golden-master/out.txt
diff ./golden-master/expected/expected4.txt ./golden-master/out.txt
