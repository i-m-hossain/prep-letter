## step by step decreasing monotonic stack problem:

temps = [73, 74, 75, 71, 69, 72, 76, 73]
output = [1,1,4, 2, 1, -1, -1]

initialy, stack = []
i = 0; temps[0](73) ; stack=[0]; result = [0,0,0,0,0,0,0,0]
i = 1; temps[1](74) > stack[-1](73); "pop 73 index-0 & push 74 index"; stack=[1]; 1-0 =1; upading 0th index, result = [1,0,0,0,0,0,0, 0]
i = 2; temps[2](75) > stack[-1](74); "pop 74 index-1 & push 75 index"; stack = [2]; 2-1 =1; updating 1st result = [1,1, 0,0,0,0,0,0]
i = 3; temps[3](71) < stack[-1](75); "push 71 index-3"; stack=[2,3]
i = 4; temps[4](69) < stack[-1](71); push 69 index; [2,3,4]
i = 5;
temps[5](72) > stack[-1](69); pop 69 index -4; stack=[2,3]; 5-4 =1; updating 4th index, result = [1,1,0,0,1,0,0,0]
AGAIN, temps[5](72) > stack[-1] (71); pop 71 index - 3; stack =[2]; 5-3 =2; updaing 3rd indx, result = [1,1,0,2,1,0,0,0]
again, temps[5](72) < stack[-1] (75); push 72 index -5; stack = [2,5];

i = 6

temps[6](76) > stack[-1]; pop 72 index-5; stack = [2], 6-5 , result= [1,1,0,2,1,1,0,0]
temp[6](76) >stack[-1]; pop 75 index 2 ; stack=[], 6-2, result [1,1,4, 2,1,1,0,0]
push 76 to stack; stack= [6]

i=7

temps[7] < stack[-1]; push 73 index 7 in stack stack = [6,7]; result [1,1,4,2,1,1,0,0]
