| package |
package := Package name: 'US Writing API for XML Tests'.
package paxVersion: 1;
	basicComment: '$id: US Writing API for XML Tests 0.002$
$for: Dolphin Smalltalk X6.1 Beta 2$

(c) $date: 24.07.2009$, $developer: udos@udos-laptop$ <Udo.Schneider@homeaddress.de>
Public Domain, Freeware

Based on "WAX-RMV.7.mcz" (2008-10-22 03:23:01) from the "Writing API for XML" Project on Squeak Source:
http://www.squeaksource.com/@WKdv9M7Ta-2KxKvg/ds0z_a21

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'.

package basicPackageVersion: '0.002'.


package classNames
	add: #WAXTest;
	add: #XMLUtilTest;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: '..\..\Object Arts\Dolphin\Base\Dolphin';
	add: '..\..\Camp Smalltalk\SUnit\SUnit';
	add: 'US Writing API for XML';
	yourself).

package!

"Class Definitions"!

TestCase subclass: #WAXTest
	instanceVariableNames: 'lineSeparator stream wax expected'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
TestCase subclass: #XMLUtilTest
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

WAXTest guid: (GUID fromString: '{EA227DB7-528C-4A1C-B7B1-1427DD3E71A6}')!
WAXTest comment: ''!
!WAXTest categoriesForClass!Unclassified! !
!WAXTest methodsFor!

assert

assert: aString equals: aString2 
	self assert: aString = aString2!

setUp
	stream := WriteStream on: String new.	"to write to a String"
	wax := WAX stream: stream.
	lineSeparator := wax lineSeparator!

testAttributes

testAttributeWithEscape

testAttributeWithoutEscape

testBadAttributeName	

testBadAttributeTimingCaught

testBadCDATA

testBadChild

testBadCloseAlreadyClosedByWAX

testBadCloseThenWrite

testBadCloseWithoutRoot

testBadComment

testBadDTDAfterRoot

testBadDTDMultiple

testBadElementName

testBadEnd

testBadEntityDef

testBadExtraEnd

testBadIndentBadChars

testBadIndentMultipleTabs

testBadIndentNegative

testBadIndentTooLarge

testBadLineSeparatorTiming

testBadNamespaceDuplicatePrefix

testBadNamespaceInElementContent

testBadNamespaceMultipleDefault

testBadNoRoot

testBadPrefix

testBadSetLineSeparator

testBadTextAfterRootEnd

testBadTextInProlog

testBadTrustMeFalse

testBadWrite

testBadWriteFile
	self should: 
			[| fs |
			fs := FileStream write:  '.'.	"the current directory, not a file"
			"This isn't a WAX issue. The line above signals the exception."
			wax := WAX stream: fs]
		raise: FileException!

testBadXSLTAfterRoot

testBadXSLTMultiple

testBig

testBlankLine

testCDATAWithNewlines

testCDATAWithoutNewlines

testCommentedStartWithContent

testCommentedStartWithNamespace

testCommentedStartWithoutContent

testCommentWithNewlines

testCommentWithOutNewlines

testDTDPublic

testDTDSystem

testEmpty

testEndVerbose

testEntityDef

testEscape

testEscapeOffAndOn

testExternalEntityDef

testGetIndent

testIndentByNum

testIndentByStringWeird

testNamespace

testNamespaceDuplicatePrefix

testNamespaceMultipleDefault

testNilComment

testNilCommentAfterClose

testNilCommentWithTrustMe

testNoAmpersandOrLessThanQuotingInComment

testNoAmpersandOrLessThanQuotingInProcessingInstruction

testNoIndent

testNoIndentOrLineSeparators

testPrefix

testProcessingInstructionAfterProlog

testProcessingInstructionInProlog

testSchemasWithIndent

testSchemasWithoutIndent

testSetLineSeparator

testSpaceInEmptyElements

testText

testTrustMeTrue

testUseWindowsLineSeparator

testXMLDeclaration

testXMLVersion11

testXMLVersionNil

testXSLT
!WAXTest categoriesFor: #assert!private! !
!WAXTest categoriesFor: #assert:equals:!public! !
!WAXTest categoriesFor: #setUp!public!running! !
!WAXTest categoriesFor: #testAttributes!public!tests! !
!WAXTest categoriesFor: #testAttributeWithEscape!public!tests! !
!WAXTest categoriesFor: #testAttributeWithoutEscape!public!tests! !
!WAXTest categoriesFor: #testBadAttributeName!public!tests! !
!WAXTest categoriesFor: #testBadAttributeTimingCaught!public!tests! !
!WAXTest categoriesFor: #testBadCDATA!public!tests! !
!WAXTest categoriesFor: #testBadChild!public!tests! !
!WAXTest categoriesFor: #testBadCloseAlreadyClosedByWAX!public!tests! !
!WAXTest categoriesFor: #testBadCloseThenWrite!public!tests! !
!WAXTest categoriesFor: #testBadCloseWithoutRoot!public!tests! !
!WAXTest categoriesFor: #testBadComment!public!tests! !
!WAXTest categoriesFor: #testBadDTDAfterRoot!public!tests! !
!WAXTest categoriesFor: #testBadDTDMultiple!public!tests! !
!WAXTest categoriesFor: #testBadElementName!public!tests! !
!WAXTest categoriesFor: #testBadEnd!public!tests! !
!WAXTest categoriesFor: #testBadEntityDef!public!tests! !
!WAXTest categoriesFor: #testBadExtraEnd!public!tests! !
!WAXTest categoriesFor: #testBadIndentBadChars!public!tests! !
!WAXTest categoriesFor: #testBadIndentMultipleTabs!public!tests! !
!WAXTest categoriesFor: #testBadIndentNegative!public!tests! !
!WAXTest categoriesFor: #testBadIndentTooLarge!public!tests! !
!WAXTest categoriesFor: #testBadLineSeparatorTiming!public!tests! !
!WAXTest categoriesFor: #testBadNamespaceDuplicatePrefix!public!tests! !
!WAXTest categoriesFor: #testBadNamespaceInElementContent!public!tests! !
!WAXTest categoriesFor: #testBadNamespaceMultipleDefault!public!tests! !
!WAXTest categoriesFor: #testBadNoRoot!public!tests! !
!WAXTest categoriesFor: #testBadPrefix!public!tests! !
!WAXTest categoriesFor: #testBadSetLineSeparator!public!tests! !
!WAXTest categoriesFor: #testBadTextAfterRootEnd!public!tests! !
!WAXTest categoriesFor: #testBadTextInProlog!public!tests! !
!WAXTest categoriesFor: #testBadTrustMeFalse!public!tests! !
!WAXTest categoriesFor: #testBadWrite!public!tests! !
!WAXTest categoriesFor: #testBadWriteFile!public!tests! !
!WAXTest categoriesFor: #testBadXSLTAfterRoot!public!tests! !
!WAXTest categoriesFor: #testBadXSLTMultiple!public!tests! !
!WAXTest categoriesFor: #testBig!public!tests! !
!WAXTest categoriesFor: #testBlankLine!public!tests! !
!WAXTest categoriesFor: #testCDATAWithNewlines!public!tests! !
!WAXTest categoriesFor: #testCDATAWithoutNewlines!public!tests! !
!WAXTest categoriesFor: #testCommentedStartWithContent!public!tests! !
!WAXTest categoriesFor: #testCommentedStartWithNamespace!public!tests! !
!WAXTest categoriesFor: #testCommentedStartWithoutContent!public!tests! !
!WAXTest categoriesFor: #testCommentWithNewlines!public!tests! !
!WAXTest categoriesFor: #testCommentWithOutNewlines!public!tests! !
!WAXTest categoriesFor: #testDTDPublic!public!tests! !
!WAXTest categoriesFor: #testDTDSystem!public!tests! !
!WAXTest categoriesFor: #testEmpty!public!tests! !
!WAXTest categoriesFor: #testEndVerbose!public!tests! !
!WAXTest categoriesFor: #testEntityDef!public!tests! !
!WAXTest categoriesFor: #testEscape!public!tests! !
!WAXTest categoriesFor: #testEscapeOffAndOn!public!tests! !
!WAXTest categoriesFor: #testExternalEntityDef!public!tests! !
!WAXTest categoriesFor: #testGetIndent!public!tests! !
!WAXTest categoriesFor: #testIndentByNum!public!tests! !
!WAXTest categoriesFor: #testIndentByStringWeird!public!tests! !
!WAXTest categoriesFor: #testNamespace!public!tests! !
!WAXTest categoriesFor: #testNamespaceDuplicatePrefix!public!tests! !
!WAXTest categoriesFor: #testNamespaceMultipleDefault!public!tests! !
!WAXTest categoriesFor: #testNilComment!public!tests! !
!WAXTest categoriesFor: #testNilCommentAfterClose!public!tests! !
!WAXTest categoriesFor: #testNilCommentWithTrustMe!public!tests! !
!WAXTest categoriesFor: #testNoAmpersandOrLessThanQuotingInComment!public!tests! !
!WAXTest categoriesFor: #testNoAmpersandOrLessThanQuotingInProcessingInstruction!public!tests! !
!WAXTest categoriesFor: #testNoIndent!public!tests! !
!WAXTest categoriesFor: #testNoIndentOrLineSeparators!public!tests! !
!WAXTest categoriesFor: #testPrefix!public!tests! !
!WAXTest categoriesFor: #testProcessingInstructionAfterProlog!public!tests! !
!WAXTest categoriesFor: #testProcessingInstructionInProlog!public!tests! !
!WAXTest categoriesFor: #testSchemasWithIndent!public!tests! !
!WAXTest categoriesFor: #testSchemasWithoutIndent!public!tests! !
!WAXTest categoriesFor: #testSetLineSeparator!public!tests! !
!WAXTest categoriesFor: #testSpaceInEmptyElements!public!tests! !
!WAXTest categoriesFor: #testText!public!tests! !
!WAXTest categoriesFor: #testTrustMeTrue!public!tests! !
!WAXTest categoriesFor: #testUseWindowsLineSeparator!public!tests! !
!WAXTest categoriesFor: #testXMLDeclaration!public!tests! !
!WAXTest categoriesFor: #testXMLVersion11!public!tests! !
!WAXTest categoriesFor: #testXMLVersionNil!public!tests! !
!WAXTest categoriesFor: #testXSLT!public!tests! !

XMLUtilTest guid: (GUID fromString: '{77FBDD2B-6AD6-4709-8DC8-2A88CB4BD32F}')!
XMLUtilTest comment: ''!
!XMLUtilTest categoriesForClass!Unclassified! !
!XMLUtilTest methodsFor!

assert: aString equals: aString2 
	self assert: aString = aString2!

flag: aSymbol 
	!

testBadComment

testBadName

testBadURI

testBadVersion

testEscape

testIsComment

testIsName

testIsURI

testIsVersion
!XMLUtilTest categoriesFor: #assert:equals:!public! !
!XMLUtilTest categoriesFor: #flag:!public! !
!XMLUtilTest categoriesFor: #testBadComment!public!tests! !
!XMLUtilTest categoriesFor: #testBadName!public!tests! !
!XMLUtilTest categoriesFor: #testBadURI!public!tests! !
!XMLUtilTest categoriesFor: #testBadVersion!public!tests! !
!XMLUtilTest categoriesFor: #testEscape!public!tests! !
!XMLUtilTest categoriesFor: #testIsComment!public!tests! !
!XMLUtilTest categoriesFor: #testIsName!public!tests! !
!XMLUtilTest categoriesFor: #testIsURI!public!tests! !
!XMLUtilTest categoriesFor: #testIsVersion!public!tests! !

"Binary Globals"!
