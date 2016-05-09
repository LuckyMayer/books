<?php 
	session_start();

?>
<div id="book-detail">
	<div class="query-header">
		<h1>
			<i class="icon-notebook i-title"></i>
			书目信息
		</h1>
	</div>
	<div class="book-info">
		<div class="bk-group">
			<p><span class="list-lb"> 书 名:《{{bookInfo.bookName}}》</span></p>
		</div>
		<div class="bk-group">
			<p><span class="list-lb"> 作 者: {{bookInfo.bookAuthor}}</span></p>
		</div>
		<div class="bk-group">
			<p><span class="list-lb"> 版 本: 第 {{bookInfo.bookVersion}} 版</span></p>
		</div>
		<div class="bk-group">
			<p><span class="list-lb">出版社: {{bookInfo.bookPublish}}</span></p>
		</div>
		<div class="bk-group">
			<p><span class="list-lb"> 摘 要: {{bookInfo.bookBrief}}</span></p>
		</div>
		<div class="bk-group">
			<p><span class="list-lb">索书号: {{bookInfo.bookID}}</span></p>
		</div>
		<div class="bk-group">
			<p><span class="list-lb">可借数量: {{bookInfo.bookAmount}} 本</span></p>
		</div>
		<div class="bk-group" ng-controller="zanController">
			<p>
				<span class="list-lb">综合评价:
				<i ng-class="shiningStar(0,bookInfo.zan)" id="lv_1" ></i>
				<i ng-class="shiningStar(1,bookInfo.zan)" id="lv_2" ></i>
				<i ng-class="shiningStar(2,bookInfo.zan)" id="lv_3"></i>
				<i ng-class="shiningStar(3,bookInfo.zan)" id="lv_4"></i>
				<i ng-class="shiningStar(4,bookInfo.zan)" id="lv_5"></i>
				<i></i>
				<button class="zan" ng-click="support(bookInfo.bookID)"><i class="icon-like"></i>推荐</button>
				<button class="opp" ng-click="oppose(bookInfo.bookID)"><i class="icon-dislike"></i>推荐</button>
				</span>
			</p>
		</div>
	</div>
	<div class="book-comment" ng-controller="commentController">
		<div class="query-header">
			<h3><i class="fa fa-bookmark-o i-title"></i>
				读者评论
			</h3>
		</div>
		<div class="comment-list">
			<div class="bk-group">
				<p class="userID"><span>暴力小孩</span></p>
				<p class="comdate"><span class="smal">2016-04-21</span></p>
				<p class="comment">这本书还不错的样子</p>
			</div>
		</div>
		<div class="comment-onself">
			<textarea placeholder="在这边进行评论，不要超过100字.."></textarea>
			<!-- <button class="btn btn-primary" ng-click="subComment(bookInfo.bookID,$_SESSION['username'])">提交评论</button> -->
			<?php echo "<button class='btn btn-primary' ng-click='subComment(bookInfo.bookID,".$_SESSION['username'].")''>提交评论</button>";?>
		</div>
	</div>
</div>